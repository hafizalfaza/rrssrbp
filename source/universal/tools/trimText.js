export const trimText = (text, maxLength) => {
  let splitText;
  let trimmedText = '';

  if(text.length > maxLength) {
      splitText = text.split(' ');
      
      for(let eachWord of splitText){
          
          
      }

      splitText.forEach((word, i) => {

        if(i>0){
            trimmedText += ' '
        }

        if((trimmedText + ' ' + word).length <= maxLength){
            trimmedText += word;
        }
      })
  }
  return trimmedText;
}