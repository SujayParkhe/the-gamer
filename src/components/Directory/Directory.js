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
                    imageUrl: 'https://i.gadgets360cdn.com/large/GTA_5_1591910141267.jpg?downsize=950:*&output-quality=80',
                    id: 1,
                    linkUrl: 'pc-games'
                  },
                  {
                    title: 'ps games',
                    imageUrl: 'https://wallpapercave.com/wp/wp2392870.jpg',
                    id: 2,
                    linkUrl: 'shop/ps-games'
                  },
                  {
                    title: 'xbox games',
                    imageUrl: 'https://wallpapercave.com/wp/wp14646.jpg',
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
                    this.state.sections.map(({ id, ...otherSectionProps }) => (
                        <MenuItem key={id} {...otherSectionProps} />
                    ))
                }
            </div>
        )
    }
}

export default Directory;
