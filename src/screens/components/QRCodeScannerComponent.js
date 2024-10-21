import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { QRCodeScanner } from 'react-native-qrcode-scanner';

const QRCodeScannerComponent = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [result, setResult] = useState(null);

  const requestPermission = async () => {
    const permission = await QRCodeScanner.requestPermissions();
    setHasPermission(permission);
  };

  const handleScan = ({ data }) => {
    setScanned(true);
    setResult(data);
  };

  if (hasPermission === null) {
    return (
      <View>
        <Text>Requesting for camera permission</Text>
        <TouchableOpacity onPress={requestPermission}>
          <Text>Ok</Text>
        </TouchableOpacity>
      </View>
    );
  }

  if (hasPermission === false) {
    return (
      <View>
        <Text>Permission denied</Text>
      </View>
    );
  }

  return (
    <View>
      <QRCodeScanner
        onRead={handleScan}
        flashMode={QRCodeScanner.Constants.FlashMode.auto}
        topContent={
          <Text>
            Go to <Text style={{ color: 'blue' }}>wikipedia.org/wiki/QR_code</Text> on your computer and scan the QR code.
          </Text>
        }
        bottomContent={
          <TouchableOpacity onPress={() => setScanned(false)}>
            <Text>Scan again</Text>
          </TouchableOpacity>
        }
      >
        {scanned && (
          <View>
            <Text>Result</Text>
            <Text>{result}</Text>
          </View>
        )}
      </QRCodeScanner>
    </View>
  );
};

export default QRCodeScannerComponent;