/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 * Modifications Copyright OpenSearch Contributors. See
 * GitHub history for details.
 */

/*
 * Copyright 2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License").
 * You may not use this file except in compliance with the License.
 * A copy of the License is located at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * or in the "license" file accompanying this file. This file is distributed
 * on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 * express or implied. See the License for the specific language governing
 * permissions and limitations under the License.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { EuiEmptyPrompt, EuiText } from '@elastic/eui';

const EmptyDetectorMessage = (props) => (
  <div
    style={{
      borderRadius: '5px',
      padding: '10px',
      border: '1px solid #D9D9D9',
      height: '250px',
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      ...props.containerStyle,
    }}
  >
    <EuiEmptyPrompt
      style={{ maxWidth: '45em' }}
      body={<EuiText>You must specify a detector.</EuiText>}
    />
  </div>
);

EmptyDetectorMessage.propTypes = {
  containerStyle: PropTypes.object,
};
EmptyDetectorMessage.defaultProps = {
  containerStyle: {},
};

export { EmptyDetectorMessage };
