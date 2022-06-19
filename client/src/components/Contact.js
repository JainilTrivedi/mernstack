import React from 'react'

const Contact = () => { 
  return (
    <>
      <div class="container">
        <form action="action_page.php">

          <label for="fname">Name</label>
          <input type="text" id="fname" name="firstname" placeholder="Your name" />

            <label for="lname">Email</label>
            <input type="text" id="lname" name="lastname" placeholder="Your email" />

              <label for="subject">Subject</label>
              <textarea id="subject" name="subject" placeholder="" ></textarea>

            <input type="submit" value="Send Message"/>

        </form>
      </div>
    </>
  )
}

export default Contact;
