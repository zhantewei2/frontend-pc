const webfont=require('webfont').default;
const fs=require('fs');
const path=require('path');
const host=process.cwd();
const join=_path=>path.join(host,_path);

webfont({
	files: join('font_img/*.svg'),
	fontName:"ztwFontIcons",
	formats:['woff'],
	templateClassName:'fa',
	template:'css',
	templateFontPath:'./fonts',
	templateFontName:'customer'
})
.then(result=>{
	fs.writeFile(join('public/css/fonts/customer.woff'),result.woff,(err,r)=>{
			if(err)return console.error(err);
			fs.readFile(join('public/css/_font.css'),'utf8',(err,content)=>{
				content+='\n'+result.template;
				fs.writeFile(join('public/css/font.css'),content,'utf8',(err)=>{
					err?console.log(err):console.log('success')
				
				})
			})

	})
}).catch(err=>{
	console.log(err)
})
