# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Project.destroy_all 

demo_user = User.create!(name: 'Minifig', bio: 'Learning about this site', password: 'password', email: '')
User.create(name: 'Forestman2', bio: 'V-necks >> collars', password: 'password', email: 'wfeather@hideout.com')
User.create(name: 'Blacktron', bio: 'We are smiling and industrious.', password: 'password', email: 'neon10@fgeneration.com')
User.create(name: 'Harumi', bio: 'Definitely not vengeful at all', password: 'password', email: 'princess@royalpalace.gov')

demo_project = Project.create!(name: 'City Roads', description: 'Our cars should drive on something smooth and not get carpet fibers tangled in the tires', owner_id: demo_user.id)
Project.create!(name: 'Buildings should fit together', description: 'Installing technic pins', owner_id: demo_user.id)

Message.create!(title: 'Road shape', body: 'How many T-intersections do we need?', owner_id: demo_user.id, project_id: demo_project.id)
