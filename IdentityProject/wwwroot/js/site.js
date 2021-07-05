// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
var i = 0;
var images = [];
var slideTime = 5000; // 5 seconds

images[0] = 'https://wallpaperaccess.com/full/1512223.jpg';
images[1] = 'https://www.cnet.com/a/img/resize/38878b4401154eb2c4cd9c4d09bf39b9c70ad827/hub/2021/01/05/c038963b-027d-40e5-a158-2d0d0617b4e3/black-widow-marvel-poster-crop.jpg?auto=webp&width=1092';
images[2] = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/10a52e78-7508-4317-9ecc-432a67ea6c64/dbthgjw-fe552914-d24b-402a-bb76-626abd276298.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzEwYTUyZTc4LTc1MDgtNDMxNy05ZWNjLTQzMmE2N2VhNmM2NFwvZGJ0aGdqdy1mZTU1MjkxNC1kMjRiLTQwMmEtYmI3Ni02MjZhYmQyNzYyOTguanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.xAHmAcpe9lsZ64lxw6_IgooFhMAFCMZHHMxZ9SFy3HA';

function changePicture() {
    document.body.style.backgroundImage = "url(" + images[i] + ")";
  

    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }
    setTimeout(changePicture, slideTime);
}

window.onload = changePicture;
