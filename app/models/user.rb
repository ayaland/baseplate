class User < ApplicationRecord
  attr_reader :password

  validates :name, :password_digest, :session_token, presence: true
  validates :name, uniqueness: true
  validates :password, length: { minimum: 2 }, allow_nil: true

  after_initialize :ensure_session_token

  has_many :projects, dependent: :destroy,
    foreign_key: :owner_id
    
  has_many :todos,
    through: :subscribed

  has_many :messages,
    through: :subscribed

  def self.find_by_credentials(name, password)
    user = User.find_by(name: name)
    return nil unless user
    user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    generate_unique_session_token
    save!
    self.session_token
  end

  private

  def ensure_session_token
    generate_unique_session_token unless self.session_token
  end

  def new_session_token
    SecureRandom.urlsafe_base64
  end

  def generate_unique_session_token
    self.session_token = new_session_token
    while User.find_by(session_token: self.session_token)
      self.session_token = new_session_token
    end
    self.session_token
  end

end