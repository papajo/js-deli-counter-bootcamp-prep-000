function takeANumber(currLine, newPerson) {
  currLine.push(newPerson) 
  return `Welcome, ${newPerson}. You are number ${currLine.length} in line.`
}

function nowServing(currLine) {
  if (currLine.length === 0) {
      return "There is nobody waiting to be served!"
  } else {
       for (let i = 0; i < currLine.length; i++) {
         return `Currently serving ${currLine.shift()}.`
    }
  }
}

function currentLine(currLine) {
  const tempCurr = []
  if (currLine.length === 0) {
    return "The line is currently empty."
  } else {
      for (let i = 0; i < currLine.length; i++) {
        tempCurr[i] = currLine[i]  
      }
      
  }
  return `The Line is currently: ${i+1}. ${tempCurr[i]}, `
}

