# Import the os module
import os

# Create a list to store file paths
file_lst = []
# Use os.walk to walk through files and directories in the current folder
for directories, sub_directories, file_names in os.walk('.'):
    #walk thorugh the file names
    for file in file_names:
        if '.html' in file:
            # Join path and file name, and get rid of the "./"
            file_lst.append(os.path.join(directories,file)[2:])

root_url = "https://7af11697c850fff.com/alexgray1033/"
with open('sitemap.xml','w+') as f:
    f.write('<?xml version="1.0" encoding="UTF-8"?>\n')
    f.write("\t<url>\n")
    f.write("\t\t<loc>" + root_url + "</loc>\n")
    f.write("\t</url>\n")
    for file_path in file_lst:
        f.write("\t<url>\n")
        f.write("\t\t<loc>" + root_url + file_path + "</loc>\n")
        f.write("\t</url>\n")
    f.write("</urlset>")