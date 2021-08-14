const tbody = document.getElementById("tbody");
async function getData() {
  let data = await fetch("users.json").then((a) => a.json());
  data.map((user) => {
    tbody.innerHTML += `
        <tr>
        <td class='number'></td>
        <td>${user.name} </td>
        <td>${user.surname} </td>
        <td>${user.age}</td>
        <td> ${user.gender}</td>
        <td><button onclick="Sil()"> Delete</button> </td>
        </tr>
        `;
  });
  Numer();
}
getData();

function Sil() {
  event.target.parentElement.parentElement.remove();
  Numer();
}

function Numer() {
  index = 1;
  const td = document.querySelectorAll("td:nth-child(1)");
  td.forEach((a) => {
    a.innerHTML = index++;
  });
}

// document.getElementById("input").addEventListener("input",function(a){
//     console.log(a);
// let axtarilan=a.target.value.toLowerCase();
// const tr = document.querySelectorAll('tbody tr');
// tr.forEach((am) => {
//     am.classList.remove('hide');
//     let td= am.querySelector('td:nth-child(2)');
//     if(!td.innerText.toLowerCase().includes(axtarilan)){
//     am.classList.add('hide');
//     }
// });
// })

//с помощью атрибута
document.getElementById("input").addEventListener("input", function (a) {
  let znaceniye = a.target.value.toLowerCase();
  const tr = document.querySelectorAll("tbody tr");
  console.log(tr);
  tr.forEach((a) => {
    a.removeAttribute("hidden");
    let td = a.querySelector("td:nth-child(2)");
    if (!td.innerText.toLowerCase().includes(znaceniye)) {
      a.setAttribute("hidden", "true");
    }
  });
});

document.querySelector("label input").addEventListener("change", function () {
  const tr = document.querySelectorAll("tbody tr");
  if (this.checked) {
    tr.forEach((am) => {
      let td = am.querySelector("td:nth-child(4)");
      if (Number(td.innerText) < 23) {
        am.classList.add("hide");
      }
    });
  } else {
    tr.forEach((a) => a.classList.remove("hide"));
  }
});
