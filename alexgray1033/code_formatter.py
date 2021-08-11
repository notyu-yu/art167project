import sys

filename = sys.argv[1]

with open(filename) as input_file:
    # Replace special characters with their escape character
    formatted_string = input_file.read().replace('\t', '&emsp').replace('    ', '&emsp;').replace('<', '&lt').replace('>', '&gt').replace('\n', '<br>\n')
    # Write the result to another file
    with open(filename+'.txt', 'w+') as output_file:
        output_file.write(formatted_string)