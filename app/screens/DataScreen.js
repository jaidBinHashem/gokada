import React, {useEffect} from 'react';
import {Button, View, FlatList} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import User from '../components/user';

export default function DataScreen({navigation}) {
  const dispatch = useDispatch();

  const lastUpdatedTime = useSelector((state) => state.data.lastUpdatedTime);
  const serverUpdateTime = useSelector((state) => state.data.serverUpdateTime);
  const users = useSelector((state) => state.data.users);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      dispatch.data.checkLastUpdated();
    });
    return unsubscribe;
  }, [navigation]);

  useEffect(() => {
    if (!lastUpdatedTime) {
      dispatch.data.loadData();
    } else if (new Date(lastUpdatedTime) < new Date(serverUpdateTime)) {
      dispatch.data.loadData();
    }
  }, [serverUpdateTime]);

  return (
    <View style={{flex: 1}}>
      <Button onPress={() => navigation.goBack()} title="Go Back" />
      <FlatList
        data={users}
        keyExtractor={(item, index) => String(index)}
        renderItem={({item}) => <User name={item.name} city={item.city} />}
      />
    </View>
  );
}
