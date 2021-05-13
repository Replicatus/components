export default function  createAndClickOnLink(link,target){
        const Link = document.createElement('a');
        Link.href = link;
        Link.target = target ? target : '';
        document.body.appendChild(Link);
        Link.click();
        document.body.removeChild(Link);
}

