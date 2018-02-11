export const trimText = (text, maxLength) => {
  let splitText;
  let trimmedText = '';

  if(text.length > maxLength) {
      splitText = text.split(' ');
      
      for(let eachWord of splitText){
          
          if((trimmedText + ' ' + eachWord).length <= maxLength){
              trimmedText += ' ' + eachWord;
          }
      }
  }
  return trimmedText;
}