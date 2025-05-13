# Initialize a new Git repository
git init

# Add the remote GitHub repository
git remote add origin https://github.com/Connor-314/My-Website.git

# Add all files to the staging area
git add .

# Commit the changes
git commit -m "Initial commit"

# Set the default branch to main
git branch -M main

# Push the changes to the GitHub repository
git push -u origin main