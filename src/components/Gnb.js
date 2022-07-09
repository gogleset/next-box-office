import React from 'react';
import { useRouter } from 'next/router'
import { Menu } from 'semantic-ui-react';

const Gnb = () => {
    const router = useRouter();
    const activeItem = 'home';

    return (
        <div>
            <Menu inverted>
                <Menu.Item
                    name='daily'
                    active={activeItem === 'daily'}
                    onClick={() => router.push('/')}
                />
                <Menu.Item
                    name='week'
                    active={activeItem === 'week'}
                    onClick={() => router.push('/week')}
                />
                <Menu.Item
                    name='movieAPI'
                    active={activeItem === 'movieAPI'}
                    onClick={() => router.push('/api/movie')}
                />
            </Menu>
        </div>
    );
};

export default Gnb;