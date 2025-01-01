# React Native FlatList: Key Extraction Bug

This repository demonstrates a common yet subtle bug in React Native's FlatList component related to key extraction. When dealing with large datasets, improperly assigning keys can lead to unpredictable rendering behavior, including incorrect data display, UI glitches, and inconsistent updates.

## The Problem

The `key` prop in FlatList is essential for efficient rendering and data management. If your keys aren't unique and consistent across data changes (adding, removing, or reordering items), React Native might incorrectly reuse components, resulting in stale data or visual artifacts.

## How to Reproduce

1. Clone this repository.
2. Run `npm install`.
3. Run the app on an iOS/Android emulator or device.
4. Observe the issues with data display and UI consistency, particularly when scrolling through the list.

## Solution

The solution involves providing a unique and stable key for each item in your data array. This key should remain consistent even when the array changes.  The example demonstrates using a unique identifier from your data (e.g., a database ID).  Avoid using the index as a key; the index is not stable when data changes.

## Key Takeaways

* Always provide a unique and stable `key` for each item in `FlatList`.
* Avoid using the index as a key, as it changes when data is modified.
* When you suspect a rendering issue in `FlatList`, verify your `key` implementation first.