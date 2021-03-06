import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import useTheme from '../hooks/useTheme'

export default function RoomMeta ({
  icon,
  stats,
  label,
  spacedTop,
  width,
  spacedLeft
}) {
  const { colors } = useTheme()

  const styles = StyleSheet.create({
    container: {
      width: width || 'auto',
      backgroundColor: colors.surface,
      borderRadius: 12,
      paddingVertical: 12,
      paddingHorizontal: 16,
      marginTop: spacedTop ? 16 : 0,
      marginLeft: spacedLeft ? 16 : 0
    },
    inner_top: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 2
    },
    stats: {
      color: colors.primary,
      fontSize: 18,
      fontWeight: 'bold',
      marginLeft: 8
    }
  })

  return (
    <View style={styles.container}>
      <View style={styles.inner_top}>
        <MaterialCommunityIcons name={icon} size={24} color={colors.primary} />
        <Text style={styles.stats}>{stats}</Text>
      </View>
      <Text style={{ color: colors.primary }}>{label}</Text>
    </View>
  )
}
