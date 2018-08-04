        let reqBody = {
            email_address: ''
        }
        
        document.getElementById('emailaddress').onkeyup = function() {onChange("emailaddress")};

        function onChange(id) {
            let e = document.getElementById(id);
            reqBody.email_address = e.value;
        }

        function onSubmitEmail(){
            axios.post('api/mailchimp/subscribe', reqBody)
                .then(res => {
                    console.log(res.data)
                })
                .catch(err => {throw err})
        }