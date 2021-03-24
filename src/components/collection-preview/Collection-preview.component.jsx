import React from "react"
import "./Collection-preview.styles.scss"

import CollectionItem from "../collection-item/Collection-item.component"

const CollectionPreview = ({items, title}) => (
    <div className="collection-preview">
        <h1 className="title">{title.toUpperCase()}</h1>
        <div className="preview">
            {
                items
                .filter((item, idx) => idx < 4)
                .map(({id, ...otherItemProps}) => (
                    <CollectionItem key={id} {...otherItemProps}  />
                ))
            }
        </div>
    </div>
)


export default CollectionPreview