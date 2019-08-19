const emailSettings = (email, newPassword) => {
   return {
      mailOptions: {
         to : email,
         subject : "Reset your password for company managment app",
         html : `
            Hello,<br> 
            This is your new password to your 
            <strong>${email}</strong> 
            account in Company Managment App.<br>
            <h1 style="color: #F5222D;">${newPassword}</h1>
            Now you can log in to your account with this new password and change your password in user settings panel.<br>
            If you didn’t ask to reset your account password, you can ignore this email.<br>
            Thanks,<br>
            Your company managment app team.
         `
      },
   }
}

module.exports = emailSettings;