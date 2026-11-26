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
            let hoverText = parts[1].trim().match(/(?<=\<).+?(?=\>)/g)
            if (Array.isArray(hoverText)){
                hoverText = hoverText.join("")
            //    hover = hoverText
            }
            if (hoverText === null){
                hoverText = color
                
            }
            let object = {color, hoverText}
          //  console.log(object)
            returnArr.push(object)
        }


    }
   // fs.writeFileSync("testa", hover)
   return returnArr;
}











module.exports = { parsePalette };