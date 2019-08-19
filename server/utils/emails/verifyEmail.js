const emailSettings = (email, link) => {
   return {
      mailOptions: {
         to : email,
         subject : "Please confirm your Email account",
         html : `
            Hello,<br> 
            Follow this link to verify your email address.<br>
            <a href=${link}>${link}</a><br>
            If you didn’t ask to verify this address, you can ignore this email.<br>
            Thanks,<br>
            Your company managment app team.
         `
      },
   }
}

module.exports = emailSettings;