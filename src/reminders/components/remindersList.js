import React, { Component } from "react";
import { FlatList } from "react-native";
import { SwipeRow, Button, Icon, View, Text } from "native-base";
import Layout from "./remindersListLayout";
import Empty from "./empty";
import Separator from "./separator";
import ReminderItem from "./reminderItem";

export default class RemindersList extends Component {
  renderEmpty = () => <Empty text="No hay recordatorios" />;
  itemSeparator = () => <Separator />;
  render() {
    return (
      <Layout title="Recordatorios para hoy">
        <FlatList
          data={this.props.reminder}
          ListEmptyComponent={this.renderEmpty}
          ItemSeparatorComponent={this.itemSeparator}
          inverted
          renderItem={({ item }) => (
            <SwipeRow
              rightOpenValue={-75}
              body={
                <ReminderItem
                  {...item}
                  goToDetails={() => this.props.goToDetails({ ...item })}
                />
              }
              right={
                <Button danger onPress={() => this.props.removeItem(item)}>
                  <Icon active name="trash" />
                </Button>
              }
            />
          )}
        />
      </Layout>
    );
  }
}
