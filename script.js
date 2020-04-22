   $(document).ready(function(){
        $("input[type='button']").click(function(){
            var radioValue = $("input[name='Section']:checked").val();
            if(radioValue){
                alert("Your are a - " + radioValue);
            }
        });
    });