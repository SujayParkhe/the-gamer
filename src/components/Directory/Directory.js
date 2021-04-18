import React from 'react';
import MenuItem from '../MenuItem/MenuItem';
import './Directory.scss';

class Directory extends React.Component {
    constructor() {
        super();

        this.state = {
            sections: [
                {
                    title: 'pc games',
                    imageUrl: 'https://cdn1.dotesports.com/wp-content/uploads/2019/03/22081728/52a03db4019d1fb82e52cbc46fe7d646.jpg',
                    id: 1,
                    linkUrl: 'shop/pc-games'
                  },
                  {
                    title: 'ps games',
                    imageUrl: 'https://i.ytimg.com/vi/eOiUtRF8k28/maxresdefault.jpg',
                    id: 2,
                    linkUrl: 'shop/ps-games'
                  },
                  {
                    title: 'xbox games',
                    imageUrl: 'https://i.ytimg.com/vi/D4skU2yrrl8/maxresdefault.jpg',
                    id: 3,
                    linkUrl: 'shop/xbox-games'
                  },
                  {
                    title: 'gaming accessories',
                    imageUrl: 'https://wallpapercave.com/wp/wp6977321.jpg',
                    size: 'large',
                    id: 4,
                    linkUrl: 'shop/accessories'
                  },
                  {
                    title: 'pc parts',
                    imageUrl: 'https://www.newegg.com/insider/wp-content/uploads/2020/08/newegg-tech-pc-component-wallpaper-4.jpg',
                    size: 'large',
                    id: 5,
                    linkUrl: 'shop/pc-parts'
                  }
            ]

            
        }

    }

    render() {
        return (
            <div className="directory-menu">
                {
                    this.state.sections.map(({ title, imageUrl, id, size }) => (
                        <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
                    ))
                }
            </div>
        )
    }
}

export default Directory;
