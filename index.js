// Add your code here
Skip to content
Search or jump to…

Pull requests
Issues
Marketplace
Explore
 
@MoulhamHallak 
learn-co-students
/
fewpjs-sending-data-with-fetch-online-web-sp-000
29
0288
Code
Issues
Pull requests
273
Actions
Projects
Security
Insights
Done #10
 Open
tan-nate wants to merge 1 commit into learn-co-students:master from tan-nate:master
+95 −17 
 Conversation 0
 Commits 1
 Checks 0
 Files changed 3
 Open
Done
#10
File filter 
0 / 3 files viewed
  62  db.json 
Viewed
@@ -1,5 +1,6 @@
{	{
  "dogs": [{	  "dogs": [
    {
      "dogName": "Luca",	      "dogName": "Luca",
      "dogBreed": "German Shepherd",	      "dogBreed": "German Shepherd",
      "id": 1	      "id": 1
@@ -8,9 +9,31 @@
      "dogName": "Lola",	      "dogName": "Lola",
      "dogBreed": "Giant Schnauzer",	      "dogBreed": "Giant Schnauzer",
      "id": 2	      "id": 2
    },
    {
      "dogName": "Colby",
      "dogBreed": "Bull Mastiff",
      "submit": "Submit",
      "id": 3
    },
    {
      "dogName": "Byron",
      "dogBreed": "Poodle",
      "id": 4
    },
    {
      "dogName": "Byron",
      "dogBreed": "Poodle",
      "id": 5
    },
    {
      "dogName": "Byron",
      "dogBreed": "Poodle",
      "id": 6
    }	    }
  ],	  ],
  "cats": [{	  "cats": [
    {
      "catName": "Stanley",	      "catName": "Stanley",
      "catBreed": "Tabby",	      "catBreed": "Tabby",
      "id": 1	      "id": 1
@@ -21,10 +44,33 @@
      "id": 2	      "id": 2
    }	    }
  ],	  ],
  "users": [],	  "users": [
  "robots": [{	    {
    "robotName": "C8-09S100K",	      "name": "nate",
    "robotType": "Human Assistant",	      "email": "natemail",
    "id": 9000	      "id": 1
  }]	    },
    {
      "name": "jeff",
      "email": "jeffmail",
      "id": 2
    },
    {
      "name": "jeff",
      "email": "jeffmail",
      "id": 3
    },
    {
      "name": "nate",
      "email": 2,
      "id": 4
    }
  ],
  "robots": [
    {
      "robotName": "C8-09S100K",
      "robotType": "Human Assistant",
      "id": 9000
    }
  ]
} 	} 
 32  index.js 
Viewed
@@ -1 +1,33 @@
// Add your code here	// Add your code here
function submitData(name, email) {
    let formData = {
        name: name,
        email: email
    };

    let configObj = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData)
    };

    return fetch("http://localhost:3000/users", configObj)
        .then(function(response) {
          return response.json();
        })
        .then(function(object) {
            let h2 = document.createElement('h2');
            h2.innerHTML = object.id;
            document.body.appendChild(h2);
            console.log(object);
        })
        .catch(function(error) {
            let h3 = document.createElement('h3');
            h3.innerHTML = error.message;
            document.body.appendChild(h3);
            console.log(error.message);
        });
} 
 18  package-lock.json 
Viewed
Some generated files are not rendered by default. Learn more.

 ProTip! Use n and p to navigate between commits in a pull request.
© 2021 GitHub, Inc.
Terms
Privacy
Security
Status
Docs
Contact GitHub
Pricing
API
Training
Blog
About
