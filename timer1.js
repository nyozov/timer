let args = process.argv.slice(2)




const timer = function(args) {
  let argsFiltered = args.filter(i=> i >= 0).filter(i => !isNaN(i))
  
  for (let number of argsFiltered){
    
    setTimeout(()=>{
      process.stdout.write('\x07');

    }, number * 1000)

  }
}

timer(args)

