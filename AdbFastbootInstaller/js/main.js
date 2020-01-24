!function(){
    let rest = "https://api.github.com/repos/Pato05/AdbFastbootInstaller/releases/latest";
    $.ajax({
        url: rest,
        async: true,
        method: "GET",
        dataType: "json",
        success: res => {
            for(let asset of res['assets']) {
                if(asset['name'].endsWith('.exe')) {
                    $('#dwBtn').prop('href', asset['browser_download_url']);
                }
            }
        }
    });
}()