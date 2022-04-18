#  Quickly and easily create custom terminal commands!

Have you ever wanted to create your own custom commands for the terminal? Creating functions in Bash and alias in files can be a little confusing, to be honest. Why not create commands in JavaScript? Only because you hadn't thought of it!

Creating a JS command for the terminal couldn't be easier until you had a command parser to go with it. Now you can get a parsed list of flags, arguments, and files used to run the command with just one import! 

Flags appear as properties with boolean values of an object. Arguments are an array of strings. 

You can change the name of the command in package.json bin from custom-command to whatever you want it to be. You can modify what the actual command does in index.js along with adding any errors, additional arguments, flags, etc that you might want. 

When you're ready to use your command, run `npm install && npm run build && npm link` to install TypeScript, build the parser, and link the command to your terminal. You can always run `npm unlink` if you don't like your command anymore. 