window.addEventListener("load",(()=>{const e=document.querySelector("#addproject"),t=document.querySelector("#projectname");e.addEventListener("submit",(e=>{e.preventDefault(),t.value?console.log("Success"):alert("Fill out name")}))}));