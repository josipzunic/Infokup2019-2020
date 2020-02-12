import React from 'react';
import folderIcon from '../../assets/folderIcon.png';
import moleculeIcon from '../../assets/moleculeIcon.png';
import pointerIcon from '../../assets/pointerIcon.png';
import styles from './home.module.css';

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <div>
                <div className={styles['head']}>
                    <div className={styles['name']}>
                        Chemmy
                    </div>
                    <div className={styles['moto']}>
                        All of chemistry, in your hands
                    </div>
                </div>
                <div className={styles['using']}>Using the app</div>
                <div className={styles['container']}>
                    <div className={styles['component']}>
                        <img alt='Folder icon' src={folderIcon} />
                        <div className={styles['text']}>Open the 'Plug in a molecule' tab</div>
                    </div>
                    <div className={styles['component']}>
                        <img alt='Molecule icon' src={moleculeIcon} />
                        <div className={styles['text']}>Connect your molecule</div>
                    </div>
                    <div className={styles['component']}>
                        <img alt='Pointer icon' src={pointerIcon} />
                        <div className={styles['text']}>Click the Start button</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;
