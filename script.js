
const accounts = [
    {
        id: "FF001",
        level: 65,
        rank: "Cao thủ",
        skins: "20 skin súng",
        price: 50000
    },
    {
        id: "FF002",
        level: 70,
        rank: "Huyền thoại",
        skins: "35 skin súng",
        price: 150000
    },
    {
        id: "FF003",
        level: 80,
        rank: "Đại cao thủ",
        skins: "50 skin súng",
        price: 300000
    },
    {
        id: "FF004",
        level: 90,
        rank: "Thách đấu",
        skins: "70 skin súng",
        price: 450000
    }
];

const list = document.getElementById("accountList");
const search = document.getElementById("search");
const filter = document.getElementById("priceFilter");

function formatPrice(price) {
    return price.toLocaleString("vi-VN") + " VNĐ";
}

function displayAccounts() {
    const keyword = search.value.toLowerCase();
    const maxPrice = filter.value;

    const filtered = accounts.filter(account => {
        const matchName = account.id.toLowerCase().includes(keyword);
        const matchPrice =
            maxPrice === "all" || account.price < Number(maxPrice);

        return matchName && matchPrice;
    });

    list.innerHTML = "";

    if (filtered.length === 0) {
        list.innerHTML = "<p>Không tìm thấy tài khoản.</p>";
        return;
    }

    filtered.forEach(account => {
        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
            <div class="card-image">🎮</div>
            <h3>Tài khoản ${account.id}</h3>
            <p>Cấp độ: ${account.level}</p>
            <p>Rank: ${account.rank}</p>
            <p>Skin: ${account.skins}</p>
            <p class="price">${formatPrice(account.price)}</p>
            <button type="button">Xem chi tiết</button>
        `;

        card.querySelector("button").addEventListener("click", () => {
            alert(
                "Mã tài khoản: " + account.id +
                "\nCấp độ: " + account.level +
                "\nRank: " + account.rank +
                "\nSkin: " + account.skins +
                "\nGiá: " + formatPrice(account.price) +
                "\nĐây là dữ liệu minh họa."
            );
        });

        list.appendChild(card);
    });
}

search.addEventListener("input", displayAccounts);
filter.addEventListener("change", displayAccounts);

displayAccounts();
