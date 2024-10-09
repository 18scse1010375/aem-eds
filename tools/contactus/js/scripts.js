document.addEventListener("readystatechange", () => {

    const form = document.forms[0];
    console.log("--Form has been loadded---");
    if (document.readyState == "complete") {
        const form = document.forms[0];
        const submitButton=document.getElementById("submitButton");
        const formSubmitHandler = (event) => {
            event.preventDefault();
            document.getElementById("name");
            const queryString = window.location.search;
            console.log(queryString);
            const urlParams = new URLSearchParams(queryString);

            console.log("urlParams------->" , urlParams );
            const referrer=urlParams.get("referrer");
            const project=urlParams.get("project");
            const repo=urlParams.get("repo");
            const formdata = new FormData();

            console.log("project------->" , project  );
            console.log("referrer------>" , referrer  );
            console.log("repo------->" , repo  );


            formdata.append("gdocument", referrer);
            formdata.append("project", project);
            formdata.append("gitRepo", repo);
            formdata.append("name", document.getElementById("name").value);
            formdata.append("phone", document.getElementById("phone").value);
            formdata.append("email", document.getElementById("email").value);
            formdata.append("message", document.getElementById("message").value);
            console.log("---Submitting form 2----");
            const requestOptions = {
              method: "POST",
              body: formdata,
              redirect: "follow",
              mode:"no-cors",
            };
            console.log("requestOptions====>" , requestOptions  );

            fetch("http://localhost:5052/api/submit", requestOptions)
              .then((response) =>{response.text()})
              .then((result) => console.log(result))
              .catch((error) => console.error(error));
    };
     form.addEventListener("submit", formSubmitHandler);
    }
});