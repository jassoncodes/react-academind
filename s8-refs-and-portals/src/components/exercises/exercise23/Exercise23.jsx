import Input from './Input';

export const userData = {
    name: '',
    email: '',
};

export function Exercise23()
{

    function handleSaveData()
    {
        userData.name = 'TODO: Set to actual entered value';
        userData.email = 'TODO: Set to actual entered value';

        console.log(userData);
    }

    return (
        <div id="exercise23">
            <Input type="text" label="Your Name" />
            <Input type="email" label="Your E-Mail" />
            <p id="actions">
                <button onClick={handleSaveData}>Save Data</button>
            </p>
        </div>
    );
}

