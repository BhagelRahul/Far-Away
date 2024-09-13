export function Stats({ items }) {
    if (!items.length) {
        return <p className='stats'><em>Start adding some items to your packing list 🚀</em></p>;
    }

    const totalItems = items.length;
    const packedItems = items.filter(item => item.packed).length;
    const percentagePacked = totalItems > 0 ? Math.round((packedItems / totalItems) * 100) : 0;

    return (
        <footer className='stats'>
            <em>
                {percentagePacked === 100
                    ? "You got everything! Ready to go ✈️"
                    : `💼 You have ${totalItems} items on your list, and you already packed ${packedItems} (${percentagePacked}%)`}
            </em>
        </footer>
    );
}
