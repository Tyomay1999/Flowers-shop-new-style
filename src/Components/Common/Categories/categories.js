import React from 'react'
import categoriesStyles from './categories.module.scss'
import {v4 as uuidv4} from 'uuid';

const categories = [
    {
        name: 'category1',
        exact: false
    },
    {
        name: 'category2',
        exact: false
    },
    {
        name: 'category3',
        exact: [
            {
                name: 'category3.1',
                exact: false
            },
            {
                name: 'category3.2',
                exact: false
            },
            {
                name: 'category3.3',
                exact: false
            },
        ]
    },
    {
        name: 'category4',
        exact: [
            {
                name: 'category4.1',
                exact: false
            },
            {
                name: 'category4.2',
                exact: false
            },
            {
                name: 'category4.3',
                exact: false
            },
        ]
    },
    {
        name: 'category5',
        exact: [
            {
                name: 'category5.1',
                exact: false
            },
            {
                name: 'category5.2',
                exact: false
            },
            {
                name: 'category5.3',
                exact: false
            },
        ]
    },
    {
        name: 'category6',
        exact: false
    },
    {
        name: 'category7',
        exact: false
    },
]
const handlerCategories = (data) => {
    return data.map(category => {
        if (category.exact) {
            return <li key={uuidv4()} className={categoriesStyles["menu-item"]}>
                <span>{category.name}</span>
                <ol className="sub-menu">
                    {
                        category.exact.map(subCategory => {
                            return <li key={uuidv4()} className={categoriesStyles["menu-item"]}>
                                <span>{subCategory.name}</span>
                            </li>
                        })
                    }
                </ol>
            </li>
        }
        return <li key={uuidv4()} className={categoriesStyles["menu-item"]}><span>{category.name}</span></li>
    })
}

const Categories = () => {
    // const [selectedCategoryType, setCategoryType] = useState(null)

    return (
        <div className={categoriesStyles.main}>
            <nav className={categoriesStyles.menu}>
                <ol>
                    {
                        handlerCategories(categories)
                    }
                </ol>
            </nav>
        </div>
    )
}

export default Categories;