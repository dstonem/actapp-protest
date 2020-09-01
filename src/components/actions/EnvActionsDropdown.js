import React from 'react'

function EnvActionsDropdown() {
    return (
        <div>
            <select id="dropdown" name="action1" className="input-1">
                <option value="">Action 1:</option>
                <option value="Support an Environmental Campaign">Support an Environmental Campaign</option>
                {/* how might we actually enforce this? \/ */}
                <option value="Red-Meat-Free Week">Red-Meat-Free Week</option>
                <option value="Purchase a Reusable Item">Purchase a Reusable Item</option>
                <option value="Ride a Bike Instead of Drive (Three Times)">Ride a Bike Instead of Drive (Three Times)</option>
                <option value="Carpool">Carpool</option>
                <option value="Full Recycling Bin!">Full Recycling Bin!</option>
                <option value="Ride Public Transit Five Times">Ride Public Transit Five Times</option>
            </select>
            <select id="dropdown" name="action2" className="input-1">
                <option value="">Action 2:</option>
                <option value="Support an Environmental Campaign">Support an Environmental Campaign</option>
                {/* how might we actually enforce this? \/ */}
                <option value="Red-Meat-Free Week">Red-Meat-Free Week</option>
                <option value="Purchase a Reusable Item">Purchase a Reusable Item</option>
                <option value="Ride a Bike Instead of Drive (Three Times)">Ride a Bike Instead of Drive (Three Times)</option>
                <option value="Carpool">Carpool</option>
                <option value="Full Recycling Bin!">Full Recycling Bin!</option>
                <option value="Ride Public Transit Five Times">Ride Public Transit Five Times</option>
            </select>
            <select id="dropdown" name="action3" className="input-1">
                <option value="">Action 3:</option>
                <option value="Support an Environmental Campaign">Support an Environmental Campaign</option>
                {/* how might we actually enforce this? \/ */}
                <option value="Red-Meat-Free Week">Red-Meat-Free Week</option>
                <option value="Purchase a Reusable Item">Purchase a Reusable Item</option>
                <option value="Ride a Bike Instead of Drive (Three Times)">Ride a Bike Instead of Drive (Three Times)</option>
                <option value="Carpool">Carpool</option>
                <option value="Full Recycling Bin!">Full Recycling Bin!</option>
                <option value="Ride Public Transit Five Times">Ride Public Transit Five Times</option>
            </select>
        </div>
    )
}

export default EnvActionsDropdown