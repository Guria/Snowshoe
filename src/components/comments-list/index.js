import './comments-list.less';
import '../../common/styles/drop-menu.less';

import React from 'react';

import TextField from '../text-field';

export default class CommentsList extends React.Component {

    render() {
        return (
            <div className='comments-list'>
                <div className='comments-list__head'>
                    <div className='comments-list__sort drop-menu__link'>
                        <div className='drop-menu__menu comments-list__sort-drop'>
                            <label className='comments-list__sort-drop-label'>
                                <input type='radio' name='comments-sort'></input>
                                Сначала новые
                            </label>
                            <label className='comments-list__sort-drop-label'>
                                <input type='radio' name='comments-sort'></input>
                                Сначала старые
                            </label>
                        </div>
                    </div>
                    <p className='comments-list__title'>Комментарии</p>
                </div>
                <div className='comments-list__item'>
                    <a href='#' className='comments-list__item-user'>Maxim Valeev</a>
                    <span className='comments-list__item-date'>Сегодня</span>
                    <div className='comments-list__item-text'>спамер :)</div>
                </div>
                <div className='comments-list__item'>
                    <a href='#' className='comments-list__item-user'>Artem Zverkovskiy</a>
                    <span className='comments-list__item-date'>Вчера</span>
                    <div className='comments-list__item-text'>
                        Я же допустил короткие отходы от темы :)
                        + это о проектной деятельности. Так что
                        не надо тут)
                    </div>
                </div>
                <div className='comments-list__item'>
                    <a href='#' className='comments-list__item-user'>Max Gomzz</a>
                    <span className='comments-list__item-date'>12 июня в 12:12</span>
                    <div className='comments-list__item-text'>
                        Разве это дизайн? Ты просто красиво
                        нарисовал то, что я просил!
                    </div>
                </div>
                <p className='comments-list__add-comment'>Добавить комментарий</p>
                <TextField />
                <div className='comments-list__button comments-list__button-send'></div>
                <div className='comments-list__button comments-list__button-emoji'></div>
                <div className='comments-list__button comments-list__button-add'></div>
            </div>
        );
    }
}
