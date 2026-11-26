const fs = require("node:fs")



function parsePalette(filename) {
    let raw;
    try {
        raw = fs.readFileSync(filename, { encoding: "utf8" })
    }
    catch {
        return undefined
    }


    const lines = raw.split(/\r?\n/)
  

    let returnArr = []

   // let hover;

    for (let i = 0; i < lines.length; i++) {

        let cur = lines[i]
        if (cur.startsWith("//")) {
            continue;
        }
        if (cur.startsWith("#")){
            let parts = cur.split("//")[0].split(";")
          
            let color = parts[0].trim()
            let Title = parts[1].trim().match(/(?<=\<).+?(?=\>)/g)
            if (Array.isArray(Title)){
                Title = Title.join("")
            //    hover = hoverText
            }
            if (Title === null){
                Title = color
                
            }
            let object = {color, Title}
          //  console.log(object)
            returnArr.push(object)
        }


    }
   // fs.writeFileSync("testa", hover)
   return returnArr;
}











module.exports = { parsePalette };
