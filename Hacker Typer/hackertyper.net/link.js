const links = [{
        link: "htgs",
        title: "Game Deals"
    }, {
        link: "htg2a",
        title: "Game Deals"
    }, {
        link: "htfortnite",
        title: "Fortnite Deals"
    }, {
        link: "htrobux",
        title: "Robux Deals"
    }],
    r = Math.floor(Math.random() * links.length),
    {
        link,
        title
    } = links[r];
f_link.href = `https://url.duiker101.net/${link}`, f_link.innerText = `${title} [Ad]`, f_link.setAttribute("title", title), m_link.href = `https://url.duiker101.net/${link}`, m_link.innerText = `${title} [Ad]`, m_link.setAttribute("title", title);