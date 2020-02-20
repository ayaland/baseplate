# Ayanote: This was nested in a json.project do/end block
# causing project object to be nested in another project key on creation
# and breaking project card rendering
json.partial! '/api/projects/project', project: @project
# json.partial! 'project', project: @project
