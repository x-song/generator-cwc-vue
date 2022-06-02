const Generator = require('yeoman-generator')


module.exports = class extends Generator {
   async prompting(){
        const  answers = await this.prompt([
            {
                type: 'input',
                name: 'name',
                message: 'Your project name:',
                default: this.appname
            }
        ])
        this.answers = answers;
    }
    writing(){
        const templates = [
            'public/favicon.ico',
            'public/index.html',
            'src/assets/logo.png',
            'src/components/HelloWorld.vue',
            'src/App.vue',
            'src/main.js',
            'src/main.js',
            '.gitignore',
            'babel.config.js',
            'jsconfig.json',
            'package-lock.json',
            'package.json',
            'README.md',
            'vue.config.js',
        ] 
        templates.forEach(item=>{
            this.fs.copyTpl( this.templatePath(item),this.destinationPath(item), this.answers )
        })
      
      
    }
}