# Usage
1. Install [NodeJS](https://nodejs.org/) .
2. Clone this repository .
3. Open terminal in cloned repository folder .
4. Run command :
```
node names_extender.js <directory_path> [extender_symbol] [desired_length] [include_extension]
```
Note - you can get more info by running command `node names_extender.js -h` . 
# Example
<picture>
  <img src="https://github.com/grif-on/names_extender/blob/main/example.png">
</picture>

# Trivia (aka my motivation for writing this script)
I recently downloaded almost 300 pages of an old webcomic .

But when i copied these files to my mobile phone , its photo gallery showed the files in the wrong date order + the name order was been messed up with filenames like 2.png, 22.png and 222.png.

Of course i could just carefully transfer the files in the form of an archive to keep their order by date or something like that , but I decided to automate the process of renaming the files to make their names like 002.png , 022.png and 222.png .

Along the way i learned how to work with files in nodejs , how to do simple unit tests using the built-in "assert" and how to do "export/require" in nodejs .
