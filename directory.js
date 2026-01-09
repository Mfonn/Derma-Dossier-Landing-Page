const dermatologists = [
    "Dr. Amina Bello","Dr. Samuel Okoye","Dr. Nkiru Adeyemi","Dr. Daniel Mensah",
    "Dr. Zainab Lawal","Dr. Ifunanya Obi","Dr. Yemi Adebayo","Dr. Fatima Musa",
    "Dr. Kofi Boateng","Dr. Sola Ogun","Dr. Laila Hassan","Dr. Chinedu Okafor",
    "Dr. Halima Abdullahi","Dr. Kwame Asante","Dr. Funke Ajayi","Dr. Ibrahim Sadiq",
    "Dr. Abena Owusu","Dr. Tunde Aluko","Dr. Rukayat Salami","Dr. Nana Serwaa",
    "Dr. Olumide Akinwale","Dr. Sadiya Garba","Dr. Michael Eze","Dr. Sefakor Mensah",
    "Dr. Blessing Onyekachi","Dr. Hassan Sule","Dr. Victoria Danjuma",
    "Dr. Kojo Antwi","Dr. Mariam Yahaya","Dr. Babatunde Ojo",
    "Dr. Safiya Bello","Dr. Yaw Darko","Dr. Uche Nwoye","Dr. Rahmat Aliyu",
    "Dr. Ebenezer Tetteh","Dr. Omotola Fashola","Dr. Aisha Lawan",
    "Dr. Kwadwo Poku","Dr. Esther Balogun","Dr. Sani Mohammed",
    "Dr. Akosua Frimpong","Dr. Adesola Adekunle","Dr. Farida Danladi",
    "Dr. Kofo Ogunleye","Dr. Salim Abubakar","Dr. Deborah Afolayan",
    "Dr. Yussuf Abdulkareem","Dr. Peace Nwankwo"
  ].map(name => ({
    name,
    specialty: ["medical","cosmetic","hair","pediatric"][Math.floor(Math.random()*4)],
    label: "Verified Dermatologist",
    verified: true
  }));
  
  const results = document.getElementById("results");
  const search = document.getElementById("search");
  const filter = document.getElementById("specialtyFilter");
  const hint = document.getElementById("hint");
  
  function render(list) {
    results.innerHTML = "";
    list.forEach(doc => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <h3>${doc.name}</h3>
        <div class="specialty">${doc.label}</div>
        <div class="verified">Verified</div>
        <button>Request Contact</button>
      `;
      card.querySelector("button")
        .addEventListener("click", () =>
          document.getElementById("contactModal").classList.remove("hidden")
        );
      results.appendChild(card);
    });
  }
  
  function filterList() {
    const q = search.value.toLowerCase();
  
    if (!q) {
      results.innerHTML = "";
      hint.style.display = "block";
      return;
    }
  
    hint.style.display = "none";
  
    const filtered = dermatologists.filter(d =>
      d.name.toLowerCase().includes(q)
    );
  
    render(filtered);
  }
  
  search.addEventListener("input", filterList);
  filter.addEventListener("change", filterList);
  
  document.getElementById("closeContact").onclick = () =>
    document.getElementById("contactModal").classList.add("hidden");
  