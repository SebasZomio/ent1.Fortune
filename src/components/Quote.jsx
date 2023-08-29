
const Quote = ({ phrase }) => {
    return (
        <div className="container_phrase">
            <p className="quote-text">{phrase.phrase}</p>
            <p className="quote-author"> {phrase.author}</p>
        </div>
    );
};

export default Quote;
