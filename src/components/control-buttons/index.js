import React from 'react';
import '../../common/styles/drop-menu.less';

export default class ControlButtons extends React.Component {
    render() {
        return (
            <div className='control-buttons'>
                <div className='command-key drop-menu__link'>
                    ⌘
                    <div className='drop-menu__menu hotkeys'>

                        <div className='hotkeys__group'>
                            <p className='hotkeys__title'>Группа команд</p>
                            <div className='hotkeys__command'>
                                <span className='hotkeys__key'>Ctrl</span>
                                <span className='hotkeys__plus'>+</span>
                                <span className='hotkeys__key'>C</span>
                                <span className='hotkeys__do'>Команда</span>
                            </div>
                            <div className='hotkeys__command'>
                                <span className='hotkeys__key'>Ctrl</span>
                                <span className='hotkeys__plus'>+</span>
                                <span className='hotkeys__key'>C</span>
                                <span className='hotkeys__do'>Команда</span>
                            </div>
                            <div className='hotkeys__command'>
                                <span className='hotkeys__key'>Ctrl</span>
                                <span className='hotkeys__plus'>+</span>
                                <span className='hotkeys__key'>C</span>
                                <span className='hotkeys__do'>Команда</span>
                            </div>
                        </div>

                        <div className='hotkeys__group'>
                            <p className='hotkeys__title'>Группа команд</p>
                            <div className='hotkeys__command'>
                                <span className='hotkeys__key'>Ctrl</span>
                                <span className='hotkeys__plus'>+</span>
                                <span className='hotkeys__key'>C</span>
                                <span className='hotkeys__do'>Команда</span>
                            </div>
                            <div className='hotkeys__command'>
                                <span className='hotkeys__key'>Ctrl</span>
                                <span className='hotkeys__plus'>+</span>
                                <span className='hotkeys__key'>C</span>
                                <span className='hotkeys__do'>Команда</span>
                            </div>
                            <div className='hotkeys__command'>
                                <span className='hotkeys__key'>Ctrl</span>
                                <span className='hotkeys__plus'>+</span>
                                <span className='hotkeys__key'>C</span>
                                <span className='hotkeys__do'>Команда</span>
                            </div>
                        </div>

                        <div className='hotkeys__group'>
                            <p className='hotkeys__title'>Группа команд</p>
                            <div className='hotkeys__command'>
                                <span className='hotkeys__key'>Ctrl</span>
                                <span className='hotkeys__plus'>+</span>
                                <span className='hotkeys__key'>C</span>
                                <span className='hotkeys__do'>Команда</span>
                            </div>
                            <div className='hotkeys__command'>
                                <span className='hotkeys__key'>Ctrl</span>
                                <span className='hotkeys__plus'>+</span>
                                <span className='hotkeys__key'>C</span>
                                <span className='hotkeys__do'>Команда</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='view-key view-key--active'></div>
            </div>
        );
    }
}
