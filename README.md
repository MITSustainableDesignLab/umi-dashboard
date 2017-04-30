![Logo](/img/LabLogo.png)

# Umi Dashboard Readme
JavaScript visualizer for umi data. 
## Master Branch
The master branch is always deployable, meaning it is stable and either live or ready to go live. New features, fixes, and general exploration occurs in new branches of the master. 

## Branches 
-  A branch is a separate environment. Changes made to a branch do not affect the master branch. New branches will not be merged until they have been reviewed during the pull request process, mentioned below. 

### Branch Naming 
- When working on a new feature or fix it is important the branch name reflects the intention - goal clearly stated (Example: Fix-Highcharts-Tooltip-Unit.) Exploratory branches, without clear intended features or fixes, should be marked with a WIP (Work In Progress) and the users initials or name. This will ensure when we merge any parallel branches we can consider merging new updates to WIPs. 


## Commits 
- A commit is a change to the code (add, edit, delete) that is committed to the branch and saved on GitHub. Do not commit to the master branch. The work flow is as follows. Make new branch – commit changes to new branch – review and merge new branch with master. Commits should always be accompanied by a clear and specific message. This message, part of the GitHub commit process, should serve as a high level description of the commit’s intention. 


## Review | Pull Request 

- If changes in a branch, small or large, could improve the master, the owner of the branch is required to open a pull request. Once opened, a pull request initializes the review process. If the pull request is accepted these changes will be merged with the master and the branch will be trimmed. If after the merger the master does not deploy properly, because of unexpected error, the master will be rolled back to the point at which the pull request was made and the branch will be active again.  

