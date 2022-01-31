import React from 'react';
import "../details.css";
import UnorderedList from '../unorderedList';
import AttachmentSVG from '../../svgs/attachmentSVG';

const Features = ({ article }) => {
 
    const keys = Object.keys(article.features);
    
    return (<div className="details-item-container">
        <div className="title-container">
            <div className="title">Details</div>
        </div>
        <div>
            <div className="grey-title">Features</div>
            <UnorderedList keys={keys} obj={article.features} />
        </div>
        <div>
            <div className="grey-title">Attachments</div>
            <div>
                {article.attachments.map((file)=>{
                    return (<div key={file.file_link} className="attachment-link">
                        <AttachmentSVG />
                        <span><a href={file.file_link} target="_blank" rel="noopener noreferrer">{file.file_label}</a></span>
                    </div>)
                })}
            </div>
        </div>
        <div>
            <div className="grey-title">Keywords</div>
            <div>
                {article.keywords.map((keyword)=>{
                    return (<div key={keyword} className="keyword-bubble">
                      {keyword}
                    </div>)
                })}
            </div>
        </div>
    </div>);
}

export default Features;