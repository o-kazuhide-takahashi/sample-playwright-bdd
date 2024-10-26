Feature: PL-BDD動作テスト
  """
  Featureの
  長いコメント
  """

  # サンプルテスト グーグル
  @sample
  Scenario: Google表示
  """
  Scenario の
  ===============
  長いコメント
  """
    Given Googleを表示する
    """
    Given の
    ===============
    長いコメント
    """
    * タイトル "Google"
    """
    And (*) の
    ===============
    長いコメント
    """

  # サンプルテスト ヤフージャパン
  @sample
  Scenario: Yahoo表示
    Given URL表示 "https://www.yahoo.co.jp/"
    * タイトル "Yahoo! JAPAN"

