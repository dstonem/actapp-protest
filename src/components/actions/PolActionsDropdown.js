import React from 'react'

function PolActionsDropdown() {
    return (
        <div>
            <select id="dropdown" name="action1" className="input-1">
                <option value="">Action 1:</option>
                <option value="Vote Early">Vote Early</option>
                <option value="Vote By Mail">Vote By Mail</option>
                <option value="Attend a City/County Council Meeting">Attend a City/County Council Meeting</option>
                <option value="Support a Political Organization">Support a Political Organization</option>
                <option value="Join a Political Organization">Join a Political Organization</option>
                {/* Organizer can post their own petition */}
                <option value="Sign a Petition">Sign a Petition</option>
                <option value="Learn About Local Politics">Learn About Local Politics</option>
            </select>
            <select id="dropdown" name="action2" className="input-1">
                <option value="">Action 2:</option>
                <option value="Vote Early">Vote Early</option>
                <option value="Vote By Mail">Vote By Mail</option>
                <option value="Attend a City/County Council Meeting">Attend a City/County Council Meeting</option>
                <option value="Support a Political Organization">Support a Political Organization</option>
                <option value="Join a Political Organization">Join a Political Organization</option>
                {/* Organizer can post their own petition */}
                <option value="Sign a Petition">Sign a Petition</option>
                <option value="Learn About Local Politics">Learn About Local Politics</option>
            </select>
            <select id="dropdown" name="action3" className="input-1">
                <option value="">Action 3:</option>
                <option value="Vote Early">Vote Early</option>
                <option value="Vote By Mail">Vote By Mail</option>
                <option value="Attend a City/County Council Meeting">Attend a City/County Council Meeting</option>
                <option value="Support a Political Organization">Support a Political Organization</option>
                <option value="Join a Political Organization">Join a Political Organization</option>
                {/* Organizer can post their own petition */}
                <option value="Sign a Petition">Sign a Petition</option>
                <option value="Learn About Local Politics">Learn About Local Politics</option>
            </select>
        </div>
    )
}

export default PolActionsDropdown