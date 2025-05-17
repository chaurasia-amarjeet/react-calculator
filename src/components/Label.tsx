import React, { JSX } from 'react';

import './label.css';

type LabelProps = {
    value: string;
}

const label = ({value}: LabelProps): JSX.Element => 
<label className="label">{value}</label>;

export default label;